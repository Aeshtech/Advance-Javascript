/* Goal: Simulate an event system with async event handling 
  🧠 Real-life Analogy: Imagine a notification system:

- User signs up → trigger welcome email
- Then log activity
- Then trigger a bonus offer email
 
We’ll simulate this with async handlers that respond to events.
 */


class AsyncEventEmitter {
  constructor() {
    this.events = {};
  }

  // Register event handler
  on(eventName, handler) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(handler);
  }

  // Emit an event and wait for all handlers to finish
  async emit(eventName, payload) {
    const handlers = this.events[eventName] || [];
    for (const handler of handlers) {
      await handler(payload);
    }
  }
}



const emitter = new AsyncEventEmitter();

// Handler 1: Welcome email
emitter.on('userSignup', async (user) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`📧 Sent welcome email to ${user.name}`);
});

// Handler 2: Log activity
emitter.on('userSignup', async (user) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`📜 Logged signup activity for ${user.name}`);
});

// Handler 3: Bonus email
emitter.on('userSignup', async (user) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log(`🎁 Sent bonus email to ${user.name}`);
});

// Simulate signup
async function simulateSignup() {
  console.log('🧑 User signs up...');
  await emitter.emit('userSignup', { name: 'Ashish' });
  console.log('✅ All signup events completed');
}

simulateSignup();


/* output
🧑 User signs up...
📧 Sent welcome email to Ashish
📜 Logged signup activity for Ashish
🎁 Sent bonus email to Ashish
✅ All signup events completed

Each handler runs sequentially, simulating how a real system reacts to user-driven or system-driven events.
*/
