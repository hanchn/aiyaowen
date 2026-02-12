import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface InteractiveFormProps {
  form: {
    question: string;
    options: string[];
  };
}

export function InteractiveForm({ form }: InteractiveFormProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>{form.question}</Text>
        {form.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
            {selectedOption === option && (
              <View style={styles.checkmark}>
                <Text style={styles.checkmarkText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  card: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#e6f4ff',
    borderColor: '#1890ff',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#1890ff',
    fontWeight: 'bold',
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1890ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
