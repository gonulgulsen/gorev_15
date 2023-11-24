import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function App() {
  const [tcNo, setTcNo] = useState("")
  const [seriNo, setSeriNo] = useState("")
  const [takvim, setTakvim] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
      setShowPicker(!showPicker);
  };

  const onChange = (event, selectedTakvim) => {
      const currentDate = selectedTakvim || takvim;
      setShowPicker(false);
      setTakvim(currentDate);
  };

  const [cepNo, setCepNo] = useState("")
  const [il, setIl] = useState("")
  const [ilce, setIlce] = useState("")
  const [mahalle, setMahalle] = useState("")
  const [kontrol, setKontrol] = useState("")


  const handleSubmit = () => {
};

  return (
    <SafeAreaView style={styles.container}>
         <StatusBar backgroundColor="#800000" barStyle="light-content" />

<Text style={styles.headerText}>Müşteri Ol</Text>


      <Text style={styles.label}>T.C. Kimlik No</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="user" size={18} color="black" style={styles.icon} /> 
      <TextInput 
        style={styles.input} 
        value={tcNo} 
        onChangeText={setTcNo} 
        placeholder="TC Kimlik Numaranızı Giriniz" 
        keyboardType='numeric'
        maxLength={11}>
      </TextInput>
      </View>

      <Text style={styles.label}>Kimlik Seri No</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="idcard" size={18} color="black" style={styles.icon} /> 
      <TextInput 
        style={styles.input} 
        value={seriNo} 
        onChangeText={setSeriNo} 
        placeholder="Kimlik Seri Numaranızı Giriniz" 
        keyboardType='numeric'
        maxLength={9}>
      </TextInput>
      </View>

      <Text style={styles.label}>Doğum Tarihi</Text>
      <View style={styles.inputContainer}>
      <MaterialIcons name="date-range" size={18} color="black" />
                  <TouchableOpacity style={styles.inputContainer} onPress={toggleDatePicker}>
                <Text style={styles.label}> {takvim.toDateString()}</Text>
            </TouchableOpacity>
            {showPicker && (
                <View style={styles.dateTimePickerContainer}>
                    <DateTimePicker
                        value={takvim}
                        mode="date"
                        display="spinner"
                        onChange={onChange}
                    />
                </View>
            )}
                  </View>


      <Text style={styles.label}>Cep Telefonu No</Text>
      <View style={styles.inputContainer}>
      <Feather name="smartphone" size={18} color="black" />    
        <TextInput 
        style={styles.input} 
        value={cepNo} 
        onChangeText={setCepNo} 
        placeholder="Cep Telefonu Numaranızı Giriniz" 
        keyboardType='numeric'
        maxLength={10}>
      </TextInput>
      </View>

      <Text style={styles.label}>İl</Text>

      <View style={styles.inputContainer}>
      <Ionicons name="map-sharp" size={18} color="black" />
            <TextInput 
        style={styles.input} 
        value={il} 
        onChangeText={setIl} 
        placeholder="Seçiniz">
      </TextInput>
      </View>

      <Text style={styles.label}>İlçe</Text>

      <View style={styles.inputContainer}>
      <MaterialIcons name="location-on" size={18} color="black" />
            <TextInput 
        style={styles.input} 
        value={ilce} 
        onChangeText={setIlce} 
        placeholder="Seçiniz">
      </TextInput>
      </View>

      <Text style={styles.label}>Mahalle</Text>
      <View style={styles.inputContainer}>
      <MaterialIcons name="location-city" size={20} color="black" />
            <TextInput 
        style={styles.input} 
        value={mahalle} 
        onChangeText={setMahalle} 
        placeholder="Seçiniz">
      </TextInput>
      </View>

      
      <View style={styles.checkboxContainer}>
  <Checkbox 
    style={styles.check}
    value={kontrol}
    onChangeText={setKontrol}
  />
  <Text style={styles.checkText}>
    Kişisel Verilerin Korunması Kanunu Aydınlatma Metni'ni okudum ve bilgilendirildim.
  </Text>
</View>
<View style={styles.checkboxContainer}>
  <Checkbox 
    style={styles.check}
    value={kontrol}
    onChangeText={setKontrol}
  />
  <Text style={styles.checkText}>Alternatif Bank A.Ş.'nin ve/veya iş ortaklarının ürün, hizmet ve kampanyalarını tanıtmaya ve pazarlamaya yönelik yazılı, sesli ve görsel iletilerini almayı kabul ediyorum.  </Text>
</View>
      
      
      
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Devam Et</Text>
            </TouchableOpacity>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    justifyContent:'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    flex: 1,
    marginLeft: 1,
  },
  icon: {
    marginRight: 1,
  },
  inputContainer: {
    height:40,
    margin:12,
    padding:10,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
    },
    
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 13,
  },
  
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
},

buttonText: {
    fontSize: 16,
},
checkboxContainer: {    
    flexDirection: 'row',
    margin:12,
    padding:10,
  },
  check: {
    marginRight: 8, // Checkbox'ın metinden ayrılması için bir miktar boşluk bırakır
  },
  checkText: {
    fontSize: 15,
    
  },
  
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#800000',
  },
});