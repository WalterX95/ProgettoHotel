import { useState, useEffect } from "react";
import type { BookingModalProps } from "../interface/BookingModalProps";
import type { BookingFormData } from "../interface/BookingFormData";

const ModalBookingComponent: React.FC<BookingModalProps> = ({ chambre, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    cameraName: "",
    price: 0,
  });

  useEffect(() => {
    if (chambre) {
      setFormData(prev => ({
        ...prev,
        cameraName: chambre.nameChambre,
        price: chambre.PriceChambre,
      }));
    }
  }, [chambre]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Prenota: {chambre.nameChambre}</h2>

        <img
          src={chambre.ImageChambre}
          alt={chambre.nameChambre}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />

        <p className="text-sm mb-2">{chambre.Services}</p>
        <p className="text-sm mb-2">
          <strong>Posti:</strong> {chambre.NSeats} | <strong>Bagni:</strong> {chambre.NToilette}
        </p>
        <p className="text-lg font-semibold text-green-700 mb-4">
          Prezzo per notte: €{chambre.PriceChambre.toFixed(2)}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            required
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="date"
            name="checkIn"
            required
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="date"
            name="checkOut"
            required
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Prenota ora
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalBookingComponent;
