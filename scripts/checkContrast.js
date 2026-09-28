const pairs = [
  ['Primary text', '#202632', '#FAFAFA', 4.5], ['Secondary text', '#5E6674', '#FAFAFA', 4.5],
  ['Primary / white', '#176B45', '#FFFFFF', 4.5], ['White / primary', '#FFFFFF', '#176B45', 4.5],
  ['Easy badge', '#FFFFFF', '#287A38', 4.5], ['Moderate badge', '#FFFFFF', '#A95600', 4.5], ['Hard badge', '#FFFFFF', '#BF2632', 4.5],
  ['Favorite icon', '#9C5B00', '#FFFFFF', 3], ['Muted icon', '#697381', '#FAFAFA', 3], ['Border', '#7A8491', '#FFFFFF', 3], ['Destructive text', '#B4232B', '#FAFAFA', 4.5],
  ['Overlay icon', '#FFFFFF', '#263446', 3], ['Switch off track', '#7A8491', '#FFFFFF', 3], ['Switch on track', '#176B45', '#FFFFFF', 3],
];
function luminance(hex) { const rgb = hex.match(/[\da-f]{2}/gi).map(v => parseInt(v,16)/255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4); return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2]; }
function ratio(a,b) { const [x,y]=[luminance(a),luminance(b)].sort((m,n)=>n-m); return (x+.05)/(y+.05); }
let failed=false; console.log('WCAG contrast audit');
pairs.forEach(([name,foreground,background,threshold]) => { const value=ratio(foreground,background); const pass=value>=threshold; failed ||= !pass; console.log(`${pass?'PASS':'FAIL'}  ${name.padEnd(20)} ${value.toFixed(2)}:1  (minimum ${threshold}:1)`); });
process.exitCode=failed?1:0;
