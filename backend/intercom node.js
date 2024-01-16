const Intercom = require('intercom-client');
const intercom = new Intercom.Client({ token: 'YOUR_INTERCOM_API_KEY' });


app.post('/submit-service-request', (req, res) => {
  const { category, comments } = req.body;

 

  intercom.conversations.create({
    type: 'user',
    user: {
      email: user.email, // Update with your logic to get user's email
    },
    template: 'plain',
    body: comments,
    tags: [{ name: category }],
  }).then((response) => {
    res.status(200).json(response);
  }).catch((error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});


app.get('/get-service-requests/:category', (req, res) => {
  const category = req.params.category;


  intercom.conversations.list({ tag_name: category }).then((response) => {
    res.status(200).json(response.body);
  }).catch((error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});
