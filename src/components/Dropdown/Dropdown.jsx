import { Button, Dropdown } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'

function Dropdownn() {
  const Ages = [
    {'id': 0,
      'type': 'Child'
    },
    {'id': 2,
      'type': 'Adult'
    },
  ]
  return (
    <div>
    
    <label for="ages">Age </label>

    <select name="ages" id="ages">
      {Ages.map((age) => (
        <option value={age.type}>{age.type}</option>
      ))}
    </select>
    </div>
  );
}

export default Dropdownn;