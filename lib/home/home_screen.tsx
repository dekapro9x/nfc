import React, { useCallback, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { readPassport } from '../services/nfc_native_module';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const [result, setResult] = useState<any>(null);

    const handleScanPress = useCallback(async () => {
        try {
            const data = await readPassport('DUMMY');
            setResult(data);
            Alert.alert(
                'Dữ liệu từ Native',
                `Tên: ${data.firstName} ${data.lastName}\nSố hộ chiếu: ${data.documentNumber}`
            );
        } catch (err: any) {
            Alert.alert('Lỗi Native', err?.message ?? String(err));
        }
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>Quét thẻ NFC</Text>
                <Text style={styles.subtitle}>
                    iPhone sẽ bắt đầu tìm kiếm thẻ khi bạn nhấn nút bên dưới.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleScanPress}>
                    <Text style={styles.buttonLabel}>Quét NFC iOS</Text>
                </TouchableOpacity>

                {result && (
                    <View style={{ marginTop: 32, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Kết quả:</Text>

                        <Text>Tên: {result.firstName} {result.lastName}</Text>
                        <Text>Số hộ chiếu: {result.documentNumber}</Text>
                        <Text>Quốc tịch: {result.nationality}</Text>
                        <Text>Ngày sinh: {result.dateOfBirth}</Text>
                        <Text>Hết hạn: {result.expiryDate}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#111111',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: '#4a4a4a',
        textAlign: 'center',
        marginBottom: 32,
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 32,
        backgroundColor: '#007aff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
});

export default HomeScreen;
