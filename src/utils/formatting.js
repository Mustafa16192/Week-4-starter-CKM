export const formatDistance = (miles, units) => units === 'Metric' ? `${(miles * 1.60934).toFixed(1)} km` : `${miles.toFixed(1)} mi`;
export const formatElevation = (feet, units) => units === 'Metric' ? `${Math.round(feet * 0.3048).toLocaleString()} m` : `${Math.round(feet).toLocaleString()} ft`;
export const formatTime = (minutes) => { const h = Math.floor(minutes / 60); const m = minutes % 60; return h ? `${h}h${m ? ` ${m}m` : ''}` : `${m}m`; };
