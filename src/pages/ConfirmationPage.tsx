import { Heading } from "@chakra-ui/react";

export function ConfirmationPage() {


  const getContactDetails = localStorage.getItem('contactDetails');
  const contactDetails = getContactDetails ? JSON.parse(getContactDetails) : null;

  return (
    <div>
      <Heading>This is the Confirmation page!</Heading>
      {contactDetails ? (
        <div>
          <p>Name: {contactDetails.firstName} {contactDetails.lastName}</p>
          <p>Email: {contactDetails.email}</p>
          <p>Phone: {contactDetails.phone}</p>
          <p>Address: {contactDetails.street}, {contactDetails.zipCode}, {contactDetails.city}</p>
        </div>
      ) : (
        <p>No stored values found.</p>
      )}
    </div>
  );
}
