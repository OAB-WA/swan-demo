'use client'

import { useBooking } from '@/contexts/BookingContext'
import BookingModal from './BookingModal'

export default function BookingModalWrapper() {
  const { isOpen, closeModal } = useBooking()
  return <BookingModal isOpen={isOpen} onClose={closeModal} />
}
