import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { profile } from '../data/profile';
import { trails } from '../data/trails';

const AppContext = createContext(null);
const KEYS = { saved: '@trailmate/savedTrailIds', notifications: '@trailmate/notificationsEnabled', units: '@trailmate/preferredUnits' };
export function AppProvider({ children }) {
  const [savedTrailIds, setSavedTrailIds] = useState([]); const [notificationEnabled, setNotificationState] = useState(false);
  const [preferredUnits, setUnitsState] = useState('Imperial'); const [storageHydrated, setStorageHydrated] = useState(false); const [storageError, setStorageError] = useState(false);
  useEffect(() => { (async () => { try { const [saved, notification, units] = await Promise.all([AsyncStorage.getItem(KEYS.saved), AsyncStorage.getItem(KEYS.notifications), AsyncStorage.getItem(KEYS.units)]); if (saved) { const valid = [...new Set(JSON.parse(saved))].filter((id) => trails.some((trail) => trail.id === id)); setSavedTrailIds(valid); } if (notification === 'true' || notification === 'false') setNotificationState(notification === 'true'); if (units === 'Imperial' || units === 'Metric') setUnitsState(units); } catch (error) { setStorageError(true); } finally { setStorageHydrated(true); } })(); }, []);
  const save = async (key, value) => { try { await AsyncStorage.setItem(key, value); } catch (error) { setStorageError(true); } };
  const toggleSavedTrail = (id) => setSavedTrailIds((current) => { const next = current.includes(id) ? current.filter((savedId) => savedId !== id) : [id, ...current]; save(KEYS.saved, JSON.stringify(next)); return next; });
  const setNotificationEnabled = (value) => { setNotificationState(value); save(KEYS.notifications, String(value)); };
  const setPreferredUnits = (value) => { setUnitsState(value); save(KEYS.units, value); };
  const value = useMemo(() => ({ savedTrailIds, toggleSavedTrail, isTrailSaved: (id) => savedTrailIds.includes(id), notificationEnabled, setNotificationEnabled, preferredUnits, setPreferredUnits, profile, storageHydrated, storageError }), [savedTrailIds, notificationEnabled, preferredUnits, storageHydrated, storageError]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);
