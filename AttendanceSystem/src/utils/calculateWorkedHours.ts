import {isToday} from 'date-fns';

export const calculateTotalWorkedHours = attendanceData => {
  const today = new Date(); // Current date

  const todayAttendance = attendanceData.filter(entry => {
    const entryDate = entry.date.toDate(); // Convert Firestore Timestamp to JavaScript Date
    return isToday(entryDate); // Check if the entry date is today
  });

  let totalWorkedMinutes = 0;

  todayAttendance.forEach(entry => {
    entry.attendanceList.forEach(attendance => {
      const checkInTime = attendance.checkIn.toDate();
      let checkOutTime = attendance.checkOut
        ? attendance.checkOut.toDate()
        : today; // Use current time if checkOut is null

      const timeDifferenceMs = checkOutTime - checkInTime; // Difference in milliseconds
      const minutesWorked = timeDifferenceMs / (1000 * 60); // Convert milliseconds to minutes

      totalWorkedMinutes += minutesWorked;
    });
  });
  const totalHours = Math.floor(totalWorkedMinutes / 60);
  const remainingMinutes = Math.round(totalWorkedMinutes % 60);
  const formattedHours = String(totalHours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  console.log(totalHours, remainingMinutes);
  //   return totalWorkedHours;
  return {
    formattedHours,
    formattedMinutes,
  };
};
