import React from 'react';
import { View, Text } from 'react-native';

class Payment {
  constructor(amount) {
    this.amount = amount;
  }

  processPayment() {
    return 'Payment processed';
  }
}

class CashPayment extends Payment {
  pay() {
    return `Paid ₱${this.amount} using cash`;
  }
}

class GCashPayment extends Payment {
  pay() {
    return `Paid ₱${this.amount} using GCash`;
  }
}

export default function App() {

  const cash = new CashPayment(500);
  const gcash = new GCashPayment(750);

  return (
    <View>
      <Text>{cash.processPayment()}</Text>
      <Text>{cash.pay()}</Text>
      <Text>{gcash.processPayment()}</Text>
      <Text>{gcash.pay()}</Text>
    </View>
  );
}