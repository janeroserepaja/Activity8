```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Payment System using Classes and Inheritance
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
    <View style={styles.container}>
      <Text style={styles.title}>Payment System</Text>

      <Text>{cash.processPayment()}</Text>
      <Text>{cash.pay()}</Text>

      <Text style={styles.space}>{gcash.processPayment()}</Text>
      <Text>{gcash.pay()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  space: {
    marginTop: 20,
  },
});
```
