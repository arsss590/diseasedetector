import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Pill,
  Plus,
  Search,
  Edit,
  Trash2,
  AlertTriangle,
  Calendar,
  FileText,
  MapPin,
  X
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

interface Medicine {
  id: string;
  name: string;
  purpose: string;
  dosage: string;
  expirationDate: string;
  notes: string;
}

const initialMedicines: Medicine[] = [
  {
    id: "1",
    name: "Ibuprofen 400mg",
    purpose: "Pain relief, headache, fever",
    dosage: "1 tablet every 6 hours as needed",
    expirationDate: "2025-06-15",
    notes: "Take with food. Do not exceed 3 tablets per day.",
  },
  {
    id: "2",
    name: "Cetirizine 10mg",
    purpose: "Allergies, hay fever, itching",
    dosage: "1 tablet daily",
    expirationDate: "2024-03-20",
    notes: "May cause drowsiness.",
  },
  {
    id: "3",
    name: "Vitamin D3 1000IU",
    purpose: "Vitamin D supplementation",
    dosage: "1 capsule daily with meal",
    expirationDate: "2026-01-10",
    notes: "Store in cool, dry place.",
  },
];

export default function MedicineCabinet() {
  const [medicines, setMedicines] = useState<Medicine[]>(initialMedicines);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);
  const [formData, setFormData] = useState<Omit<Medicine, "id">>({
    name: "",
    purpose: "",
    dosage: "",
    expirationDate: "",
    notes: "",
  });

  const isExpired = (date: string) => new Date(date) < new Date();
  const isExpiringSoon = (date: string) => {
    const expDate = new Date(date);
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return expDate <= thirtyDaysFromNow && expDate > new Date();
  };

  const filteredMedicines = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const expiredMedicines = medicines.filter((med) => isExpired(med.expirationDate));
  const expiringSoonMedicines = medicines.filter((med) => isExpiringSoon(med.expirationDate));

  const handleSubmit = () => {
    if (editingMedicine) {
      setMedicines((prev) =>
        prev.map((med) =>
          med.id === editingMedicine.id ? { ...formData, id: med.id } : med
        )
      );
    } else {
      setMedicines((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    setMedicines((prev) => prev.filter((med) => med.id !== id));
  };

  const handleEdit = (medicine: Medicine) => {
    setEditingMedicine(medicine);
    setFormData({
      name: medicine.name,
      purpose: medicine.purpose,
      dosage: medicine.dosage,
      expirationDate: medicine.expirationDate,
      notes: medicine.notes,
    });
    setIsAddDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      purpose: "",
      dosage: "",
      expirationDate: "",
      notes: "",
    });
    setEditingMedicine(null);
    setIsAddDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Pill className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold">Medicine Cabinet</h1>
                <p className="text-muted-foreground">Manage your medications and track expiration dates</p>
              </div>
            </div>
          </div>

          {/* Alerts */}
          {(expiredMedicines.length > 0 || expiringSoonMedicines.length > 0) && (
            <div className="mb-6 space-y-3">
              {expiredMedicines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/30 rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-destructive mb-1">Expired Medications</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {expiredMedicines.map((m) => m.name).join(", ")} have expired.
                      </p>
                      <Link to="/map">
                        <Button size="sm" variant="outline" className="gap-2 border-destructive/30 text-destructive hover:bg-destructive/10">
                          <MapPin className="w-4 h-4" />
                          Find Nearby Pharmacies
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {expiringSoonMedicines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-warning/10 border border-warning/30 rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-warning mb-1">Expiring Soon</h4>
                      <p className="text-sm text-muted-foreground">
                        {expiringSoonMedicines.map((m) => m.name).join(", ")} will expire within 30 days.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Search and Add */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or symptom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="medical-gradient shadow-medical gap-2">
                  <Plus className="w-4 h-4" />
                  Add Medicine
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    {editingMedicine ? "Edit Medicine" : "Add New Medicine"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="name">Medicine Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Ibuprofen 400mg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="purpose">Purpose / Symptoms</Label>
                    <Input
                      id="purpose"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      placeholder="e.g., Pain relief, headache, fever"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dosage">Dosage Instructions</Label>
                    <Input
                      id="dosage"
                      value={formData.dosage}
                      onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                      placeholder="e.g., 1 tablet every 6 hours"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiration">Expiration Date</Label>
                    <Input
                      id="expiration"
                      type="date"
                      value={formData.expirationDate}
                      onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes / Warnings</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Additional notes..."
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" onClick={resetForm} className="flex-1">
                      Cancel
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1 medical-gradient">
                      {editingMedicine ? "Save Changes" : "Add Medicine"}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Medicine Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredMedicines.map((medicine) => {
                const expired = isExpired(medicine.expirationDate);
                const expiringSoon = isExpiringSoon(medicine.expirationDate);

                return (
                  <motion.div
                    key={medicine.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`bg-card rounded-xl border p-5 transition-all hover:shadow-medical ${
                      expired
                        ? "border-destructive/50 bg-destructive/5"
                        : expiringSoon
                        ? "border-warning/50 bg-warning/5"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          expired 
                            ? "bg-destructive/20" 
                            : expiringSoon 
                            ? "bg-warning/20" 
                            : "bg-accent/20"
                        }`}>
                          <Pill className={`w-5 h-5 ${
                            expired 
                              ? "text-destructive" 
                              : expiringSoon 
                              ? "text-warning" 
                              : "text-accent"
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold">{medicine.name}</h3>
                          {expired && (
                            <span className="text-xs text-destructive font-medium">EXPIRED</span>
                          )}
                          {expiringSoon && (
                            <span className="text-xs text-warning font-medium">EXPIRING SOON</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => handleEdit(medicine)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 text-destructive hover:text-destructive"
                          onClick={() => handleDelete(medicine.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">{medicine.purpose}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Pill className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">{medicine.dosage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className={`${
                          expired 
                            ? "text-destructive" 
                            : expiringSoon 
                            ? "text-warning" 
                            : "text-muted-foreground"
                        }`}>
                          Expires: {new Date(medicine.expirationDate).toLocaleDateString()}
                        </span>
                      </div>
                      {medicine.notes && (
                        <p className="text-xs text-muted-foreground bg-muted rounded-lg p-2 mt-2">
                          {medicine.notes}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredMedicines.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
                <Pill className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">No medicines found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "Start by adding your first medicine"}
              </p>
              {!searchQuery && (
                <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Medicine
                </Button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
