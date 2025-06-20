import type { BookingFormData } from "./BookingFormData";
import type { Chambre } from "./Chambre";

export interface BookingModalProps {
    chambre: Chambre,
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: BookingFormData) => void;
}
