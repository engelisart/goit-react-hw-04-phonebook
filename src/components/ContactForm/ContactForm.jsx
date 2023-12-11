import React, { useState } from 'react';
import { ContactsForm, LabelForm, Input, Button } from './ContactForm.styled';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </LabelForm>
      <LabelForm>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </LabelForm>
      <Button type="submit">Add Contact</Button>
    </ContactsForm>
  );
};

// export class ContactForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.addContact({ ...this.state });
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <ContactsForm onSubmit={this.handleSubmit}>
//         <LabelForm>
//           Name
//           <Input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             required
//           />
//         </LabelForm>
//         <LabelForm>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             required
//           />
//         </LabelForm>
//         <Button type="submit">Add Contact</Button>
//       </ContactsForm>
//     );
//   }
// }
