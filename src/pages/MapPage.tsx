import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Search,
  Hospital,
  Pill,
  Stethoscope,
  Phone,
  Clock,
  Navigation,
  X,
  Filter
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

interface MedicalFacility {
  id: string;
  name: string;
  type: "pharmacy" | "hospital" | "clinic";
  coordinates: [number, number];
  address: string;
  phone: string;
  hours: string;
  specializations?: string[];
  doctorSummary?: string;
}

const facilities: MedicalFacility[] = [
  {
    id: "1",
    name: "Central Pharmacy",
    type: "pharmacy",
    coordinates: [71.4306, 51.1283],
    address: "123 Mangilik El Ave, Astana",
    phone: "+7 (7172) 55-12-34",
    hours: "24/7",
  },
  {
    id: "2",
    name: "City Medical Center",
    type: "hospital",
    coordinates: [71.4502, 51.1355],
    address: "45 Kenesary St, Astana",
    phone: "+7 (7172) 70-00-00",
    hours: "24/7",
    specializations: ["Emergency", "Surgery", "Cardiology"],
    doctorSummary: "Staffed with 150+ qualified physicians including specialists in emergency medicine, cardiology, and general surgery.",
  },
  {
    id: "3",
    name: "Family Health Clinic",
    type: "clinic",
    coordinates: [71.4168, 51.1195],
    address: "78 Kabanbay Batyr Ave, Astana",
    phone: "+7 (7172) 32-45-67",
    hours: "Mon-Sat: 8:00 - 20:00",
    specializations: ["General Practice", "Pediatrics", "Dermatology"],
    doctorSummary: "A team of experienced family doctors and pediatricians providing comprehensive care for all ages.",
  },
  {
    id: "4",
    name: "MediPharm Plus",
    type: "pharmacy",
    coordinates: [71.4589, 51.1412],
    address: "12 Turan Ave, Astana",
    phone: "+7 (7172) 43-21-00",
    hours: "08:00 - 22:00",
  },
  {
    id: "5",
    name: "National Research Hospital",
    type: "hospital",
    coordinates: [71.4721, 51.1289],
    address: "2 Syganak St, Astana",
    phone: "+7 (7172) 70-55-55",
    hours: "24/7",
    specializations: ["Oncology", "Neurology", "Orthopedics"],
    doctorSummary: "Leading research hospital with internationally trained specialists in oncology and neurological disorders.",
  },
  {
    id: "6",
    name: "Wellness Clinic",
    type: "clinic",
    coordinates: [71.4395, 51.1478],
    address: "34 Qorghalzhyn Highway, Astana",
    phone: "+7 (7172) 25-88-99",
    hours: "Mon-Fri: 9:00 - 18:00",
    specializations: ["Rehabilitation", "Physical Therapy", "Wellness"],
    doctorSummary: "Specialized rehabilitation center with certified physical therapists and wellness coaches.",
  },
];

const typeConfig = {
  pharmacy: { icon: Pill, color: "#10B981", label: "Pharmacy" },
  hospital: { icon: Hospital, color: "#0EA5E9", label: "Hospital" },
  clinic: { icon: Stethoscope, color: "#8B5CF6", label: "Clinic" },
};

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<MedicalFacility | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["pharmacy", "hospital", "clinic"]);

  const filteredFacilities = facilities.filter(
    (f) =>
      activeFilters.includes(f.type) &&
      (f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoicDFkIiwiYSI6ImNtamVjYW9uZzBkbmIzZHF4cGtxbDNudzgifQ.w8sok3OtyD_dYJUM62pMwQ";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [71.4306, 51.1283],
      zoom: 12,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach((m) => m.remove());
    markers.current = [];

    // Add markers for filtered facilities
    filteredFacilities.forEach((facility) => {
      const config = typeConfig[facility.type];
      
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.innerHTML = `
        <div style="
          width: 40px;
          height: 40px;
          background: ${config.color};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px ${config.color}40;
          cursor: pointer;
          transition: transform 0.2s;
        ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${facility.type === "pharmacy" ? '<path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5"/><circle cx="16.5" cy="17.5" r="2.5"/><path d="M18.5 15.5v4"/><path d="M16.5 17.5h4"/>' : ''}
            ${facility.type === "hospital" ? '<path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>' : ''}
            ${facility.type === "clinic" ? '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>' : ''}
          </svg>
        </div>
      `;
      
      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.1)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
      });
      el.addEventListener("click", () => {
        setSelectedFacility(facility);
        map.current?.flyTo({
          center: facility.coordinates,
          zoom: 15,
          duration: 1000,
        });
      });

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(facility.coordinates)
        .addTo(map.current!);

      markers.current.push(marker);
    });
  }, [filteredFacilities]);

  const toggleFilter = (type: string) => {
    setActiveFilters((prev) =>
      prev.includes(type)
        ? prev.filter((f) => f !== type)
        : [...prev, type]
    );
  };

  const flyToFacility = (facility: MedicalFacility) => {
    setSelectedFacility(facility);
    map.current?.flyTo({
      center: facility.coordinates,
      zoom: 15,
      duration: 1000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Sidebar */}
          <div className="w-full md:w-96 bg-card border-r border-border flex flex-col overflow-hidden">
            {/* Search Header */}
            <div className="p-4 border-b border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h1 className="font-display text-lg font-semibold">Find Care</h1>
                  <p className="text-xs text-muted-foreground">Nearby medical facilities</p>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search facilities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                {Object.entries(typeConfig).map(([type, config]) => {
                  const Icon = config.icon;
                  const isActive = activeFilters.includes(type);
                  return (
                    <Button
                      key={type}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleFilter(type)}
                      className="gap-1.5 flex-1"
                      style={{
                        backgroundColor: isActive ? config.color : undefined,
                        borderColor: isActive ? config.color : undefined,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="text-xs">{config.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Facility List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {filteredFacilities.map((facility) => {
                const config = typeConfig[facility.type];
                const Icon = config.icon;
                const isSelected = selectedFacility?.id === facility.id;

                return (
                  <motion.div
                    key={facility.id}
                    layout
                    onClick={() => flyToFacility(facility)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-medical"
                        : "border-border bg-card hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${config.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: config.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm truncate">{facility.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">{facility.address}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: `${config.color}20`, color: config.color }}
                          >
                            {config.label}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {facility.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {filteredFacilities.length === 0 && (
                <div className="text-center py-8">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No facilities found</p>
                </div>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="hidden md:block flex-1 relative">
            <div ref={mapContainer} className="absolute inset-0" />

            {/* Selected Facility Panel */}
            {selectedFacility && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4 w-80 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${typeConfig[selectedFacility.type].color}20` }}
                      >
                        {(() => {
                          const Icon = typeConfig[selectedFacility.type].icon;
                          return <Icon className="w-6 h-6" style={{ color: typeConfig[selectedFacility.type].color }} />;
                        })()}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold">{selectedFacility.name}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${typeConfig[selectedFacility.type].color}20`,
                            color: typeConfig[selectedFacility.type].color,
                          }}
                        >
                          {typeConfig[selectedFacility.type].label}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => setSelectedFacility(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {selectedFacility.address}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {selectedFacility.phone}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {selectedFacility.hours}
                    </div>
                  </div>

                  {selectedFacility.specializations && (
                    <div className="mt-3">
                      <p className="text-xs font-medium mb-2">Specializations</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedFacility.specializations.map((spec) => (
                          <span key={spec} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedFacility.doctorSummary && (
                    <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs font-medium mb-1">About the Medical Staff</p>
                      <p className="text-xs text-muted-foreground">{selectedFacility.doctorSummary}</p>
                    </div>
                  )}

                  <Button className="w-full mt-4 gap-2 medical-gradient">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
