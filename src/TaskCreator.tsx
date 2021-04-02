import React, {FC, useState} from "react";

interface TaskCreatorProps {
  onCreate: (search: string) => void;
}

export const TaskCreator: FC<TaskCreatorProps> = ({onCreate}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';
  const addLocation = () => {
    onCreate(locationSearch);
    setLocationSearch('');
  };

  return (
    <div>
      <input type="text"
             value={locationSearch}
             onChange={e => setLocationSearch(e.target.value)}/>
      <button type="button" onClick={addLocation}
              disabled={disableSearch}>create
      </button>
    </div>
  );
}

