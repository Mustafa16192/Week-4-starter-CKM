import React from 'react'; import { StyleSheet, Text, View } from 'react-native'; import { colors } from '../theme';
export default function DifficultyBadge({ difficulty }) { const backgroundColor = difficulty === 'Easy' ? colors.easy : difficulty === 'Moderate' ? colors.moderate : colors.hard; return <View style={[styles.badge, { backgroundColor }]}><Text style={styles.text}>{difficulty}</Text></View>; }
const styles = StyleSheet.create({ badge:{alignSelf:'flex-start',paddingHorizontal:12,paddingVertical:5,borderRadius:20}, text:{color:'#fff',fontWeight:'700',fontSize:15} });
