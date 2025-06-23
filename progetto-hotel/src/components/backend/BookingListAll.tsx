import type { BookingListProps } from "../../interface/BookingListProps";

const BookingListComponent: React.FC<BookingListProps> = ({bookings}) => {

  if(bookings.length === 0) {
        return <p className="text-center text-gray-500 mt-6">Nessuna prenotazione effettuata.</p>;
    }

    return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Prenotazioni Effettuate</h2>
      <div className="grid gap-4">
        {bookings.map((booking, index) =>(
            <div key={index} className="bg-white shadow rounded p-4 border border-gray-200">
            <p><strong>Nome:</strong> {booking.fullName}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Check-in:</strong> {booking.checkIn}</p>
            <p><strong>Check-out:</strong> {booking.checkOut}</p>
            <p><strong>Camera:</strong> {booking.cameraName}</p>
            <p><strong>Prezzo:</strong> {booking.price} €/notte</p>
          </div> 
        ))}
    </div>
    </div> 
    )
}

export default BookingListComponent;