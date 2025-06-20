import { useEffect, useState } from 'react';
import type { CardTitle } from '../interface/CardTitle';
import type { Chambre } from '../interface/Chambre';
import ModalBookingComponent from './ModalBookingComponent';
import BookingListComponent from './BookingListComponent';

const CardComponent: React.FC<CardTitle> = ({ title, subTitle }) => {
  const [chambre, setChambre] = useState<Chambre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChambre, setSelectedChambre] = useState<Chambre | null>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [openPrenBooks, setopenPrenBooks] = useState(false);

const handleBookingSubmit = (data: any) => {
  const updatedBookings = [...bookings, data];
  setBookings(updatedBookings);
  localStorage.setItem("userBookings", JSON.stringify(updatedBookings));
  
  console.log('Lios data: ',updatedBookings);
  console.log("Booking salvato:", updatedBookings);
  console.log("localStorage now:", localStorage.getItem("userBookings"));
};


  const openBookList = () => {
     setopenPrenBooks(prev => !prev);
  }

  useEffect(() => {
    const setFetchChambre = async () => {
      try {
        const response = await fetch('./data/chambres.json');
        if (!response.ok) {
          throw new Error('Errore Richiesta HTTPS');
        }
        const chambres = await response.json();
        setChambre(chambres);
      } catch (err: any) {
        setError(err.message);
        console.log(err.message);
        console.log(error);
      }
    };
    setFetchChambre();
  }, []);
  

 // Carica prenotazioni dal localStorage solo al primo avvio
useEffect(() => {
  const savedBookings = localStorage.getItem("userBookings");
  if (savedBookings) {
    setBookings(JSON.parse(savedBookings));
    console.log("Prenotazioni caricate da localStorage:", JSON.parse(savedBookings));
  }
}, []);

  const openModal = (chambre: Chambre) => {
    setSelectedChambre(chambre);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">{title}</h1>
        <h1 className="text-3xl">{subTitle}</h1>
      </div>
       <button 
        className="bg-green-600 text-center text-white px-4 py-2 rounded"
        onClick={openBookList}> Visualizza Prenotazioni Utenti</button>
        {openPrenBooks == true && <BookingListComponent bookings={bookings} />}
      <section
        id="Camere"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {chambre.map((ceh: Chambre) => (
          <div
            key={ceh.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={ceh.ImageChambre}
              alt={ceh.nameChambre}
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">{ceh.nameChambre}</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {ceh.Services}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Prezzo: {ceh.PriceChambre}
                </p>
                <p className="text-sm text-gray-600 cursor-auto ml-2">Posti : {ceh.NSeats}</p>
                <div className="ml-auto">
                  <button
                    onClick={() => openModal(ceh)}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Prenota Camera
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* UNA sola modale fuori dal ciclo */}
      {selectedChambre && (
        <ModalBookingComponent
          chambre={selectedChambre}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </>
  );
};

export default CardComponent;
