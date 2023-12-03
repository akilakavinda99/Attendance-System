import {isToday} from 'date-fns';
export const getTodaysAttendance = attendanceData => {
  const todayAttendance = attendanceData.filter(entry => {
    const entryDate = entry.date.toDate(); // Convert Firestore Timestamp to JavaScript Date
    return isToday(entryDate); // Check if the entry date is today
  });

  return todayAttendance[0]?.attendanceList;
};
