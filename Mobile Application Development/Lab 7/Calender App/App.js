import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        October
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}>S</Text>
        <Text style={styles.dateBox}>M</Text>
        <Text style={styles.dateBox}>T</Text>
        <Text style={styles.dateBox}>W</Text>
        <Text style={styles.dateBox}>T</Text>
        <Text style={styles.dateBox}>F</Text>
        <Text style={styles.dateBox}>S</Text>
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}>1</Text>
        <Text style={styles.dateBox}>2</Text>
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}>3</Text>
        <Text style={styles.dateBox}>4</Text>
        <Text style={styles.dateBox}>5</Text>
        <Text style={styles.dateBox}>6</Text>
        <Text style={styles.dateBox}>7</Text>
        <Text style={styles.dateBox}>8</Text>
        <Text style={styles.dateBox}>9</Text>
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}>10</Text>
        <Text style={styles.dateBox}>11</Text>
        <Text style={styles.dateBox}>12</Text>
        <Text style={styles.dateBox}>13</Text>
        <Text style={styles.dateBox}>14</Text>
        <Text style={styles.dateBox}>15</Text>
        <Text style={styles.dateBox}>16</Text>
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}>17</Text>
        <Text style={styles.dateBox}>18</Text>
        <Text style={styles.dateBox}>19</Text>
        <Text style={styles.dateBox}>20</Text>
        <Text style={styles.dateBox}>21</Text>
        <Text style={styles.dateBox}>22</Text>
        <Text style={styles.dateBox}>23</Text>
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}>24</Text>
        <Text style={styles.dateBox}>25</Text>
        <Text style={styles.dateBox}>26</Text>
        <Text style={styles.dateBox}>27</Text>
        <Text style={styles.dateBox}>28</Text>
        <Text style={styles.dateBox}>29</Text>
        <Text style={styles.dateBox}>30</Text>
      </View>
      <View style={styles.verticalAlignView}>
        <Text style={styles.dateBox}>31</Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
        <Text style={styles.dateBox}> </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalAlignView: {
    flexDirection: "row"
  },
  dateBox:{
    width: 30,
    height: 30
  }
});
