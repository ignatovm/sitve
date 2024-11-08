function greet(name: string, salutation: string = 'Hello', punctuation: string = '!') {
  console.log(`${salutation} ${name}${punctuation}`);
}

// Usage
greet('John'); // Output: Hello John!
greet('Jane', 'Hi'); // Output: Hi Jane!
greet('Bob', 'Hi', ':)'); // Output: Hi Bob:)
