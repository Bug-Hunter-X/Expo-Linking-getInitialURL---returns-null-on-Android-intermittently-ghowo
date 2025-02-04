The solution involves using the `addListener` method of the Linking API to listen for URL changes after the component mounts, addressing the timing issues that cause getInitialURL to return null.  This ensures that deep links are reliably caught regardless of when the app is launched:

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (url) => {
      setInitialUrl(url);
    };

    // Add listener for URL changes
    const subscription = Linking.addEventListener('url', handleUrl);

    // Try to get initial URL (might be null, but listener covers this)
    Linking.getInitialURL().then(url => setInitialUrl(url));

    // Clean up listener when component unmounts
    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>Deep link received: {initialUrl}</Text>
      ) : (
        <Text>No deep link received yet</Text>
      )}
    </View>
  );
}

```