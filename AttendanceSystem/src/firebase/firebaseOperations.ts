import firestore from '@react-native-firebase/firestore';
import {FIREBASE_CONSTANTS} from './firebaseConstants';
import {errorToast} from '../utils/toastMessages';
import {isToday} from 'date-fns';

export const getUserData = async (documentId: string) => {
  try {
    const user = await firestore()
      .collection(FIREBASE_CONSTANTS.USERS_COLLECTION)
      .doc(documentId)
      .get();
    return user.data();
  } catch (error) {
    errorToast('Error in fetching user data');
  }
};

export const userCheckIn = async (documentId: string) => {
  const today = new Date();

  const userRef = firestore()
    .collection(FIREBASE_CONSTANTS.USERS_COLLECTION)
    .doc(FIREBASE_CONSTANTS.USER_ID);

  const userData = await getUserData(documentId);

  const attendances = userData.attendances || [];

  const todayAttendanceIndex = attendances.findIndex(entry => {
    const entryDate = entry.date.toDate(); // Convert Firestore Timestamp to JavaScript Date
    return isToday(entryDate); // Check if the entry date is today
  });
  if (todayAttendanceIndex !== -1) {
    // If there's an entry for today, update the attendanceList
    const updatedAttendanceList = [
      ...attendances[todayAttendanceIndex].attendanceList,
      {
        checkIn: today,
        checkOut: null,
      },
    ];

    attendances[todayAttendanceIndex].attendanceList = updatedAttendanceList;
  } else {
    // If there's no entry for today, create a new one
    attendances.push({
      date: today,
      attendanceList: [
        {
          checkIn: today,
          checkOut: null,
        },
      ],
    });
  }

  await userRef.update({
    isCheckedIn: true,
    attendances: attendances,
  });
};

export const userCheckOut = async (documentId: string) => {
  const today = new Date();
  const userRef = firestore()
    .collection(FIREBASE_CONSTANTS.USERS_COLLECTION)
    .doc(documentId);

  try {
    const userData = await getUserData(documentId);
    const attendances = userData.attendances || [];

    const todayAttendanceIndex = attendances.findIndex(entry => {
      const entryDate = entry.date.toDate(); // Convert Firestore Timestamp to JavaScript Date
      return isToday(entryDate); // Check if the entry date is today
    });

    if (todayAttendanceIndex !== -1) {
      const lastAttendance =
        attendances[todayAttendanceIndex].attendanceList.slice(-1)[0];

      if (lastAttendance && !lastAttendance.checkOut) {
        const checkInTime = lastAttendance.checkIn.toDate();
        const checkOutTime = today;

        const timeDifference = Math.abs(checkOutTime - checkInTime);
        const minutesDifference = Math.floor(timeDifference / (1000 * 60)); // Difference in minutes

        if (minutesDifference >= 1) {
          // If check-out is at least 1 minute after check-in, proceed with checkout
          lastAttendance.checkOut = checkOutTime;
          await userRef.update({
            isCheckedIn: false,
            attendances: attendances,
          });
        } else {
          errorToast('Wait at least a minute to checkout');
        }
      } else {
        console.log('No ongoing check-in found for today.');
      }
    } else {
      console.log('No check-in found for today.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

//   firestore()
//     .collection('Users')
//     .doc(FIREBASE_CONSTANTS.USER_ID)
//     .set({
//       name: 'John Doe',
//       isCheckedIn: false,
//       attendances: [
//         {
//           date: new Date(),
//           attendanceList: [
//             {
//               checkIn: new Date(),
//               checkOut: null,
//             },
//           ],
//         },
//       ],
//     })
//     .then(() => {
//       console.log('User added!');
//     })
//     .catch(err => {
//       console.log('Error', err);
//     });
// };
