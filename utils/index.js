

import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo' 
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'Flashcards:notification'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Time to Study',
    body: 'Don\'t forget to study today!'
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(7)
                tomorrow.setMinutes(0)
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }).catch((e) => {console.warn('Error cancelling notifications: ', e)})
            }
          })
      }
    })
}