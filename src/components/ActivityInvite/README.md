```jsx
const getRandomHash = () => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';

  for (let i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const generateLink = () => `https://dlg.im/join/${getRandomHash()}`;

initialState = {
  link: generateLink(),
  pending: false
};

const handleRevoke = () => {
  setState({ pending: true });
  setTimeout(() => {
    setState({ link: generateLink(), pending: false });
  }, 3000);
};

<div style={{ background: '#fff', width: 320 }}>
  <ActivityInvite
    link={state.link}
    pending={state.pending}
    onRevoke={handleRevoke}
  />
</div>
```
