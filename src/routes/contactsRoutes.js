
const router = require('express').Router();
const {deleteContact, updateContact, createContact, getContacts} = require('../database/contacts');

router.get('/', async (apiRequest, apiResponse) => {
  apiResponse.send(await getContacts());
});

// we name our parameters apiRequest and apiResponse here but
// there is no strong reason these variables could not be named `req` and `res` or `request` and `response`
// the reason for this naming is so we are thinking about "api" tonight
router.post('/', async (apiRequest, apiResponse) => {
  const newContact = apiRequest.body;
  await createContact(newContact);
  apiResponse.send({
    message: 'New contact created.',
    allContacts: await getContacts(),
  });
});

// endpoint to delete a contact
router.delete('/:contactId', async (apiRequest, apiResponse) => {
  await deleteContact(apiRequest.params.contactId);
  apiResponse.send({ message: 'Contact deleted.' });
});

// endpoint to update a contact
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedContact = apiRequest.body;
  console.log({ updatedContact})
  await updateContact(apiRequest.params.id, updatedContact);
  apiResponse.send({ message: 'Contact updated.' });
});

module.exports = router;



