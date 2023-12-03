export interface isCheckedInType {
  isCheckedIn: boolean;
  isLoading?: boolean;
  checkOutFunction?: () => void;
  checkInFunction?: () => Promise<void>;
}
