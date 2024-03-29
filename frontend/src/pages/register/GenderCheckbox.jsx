const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
	return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checked:bg-[#7f1d1d] [--chkbg:theme(colors.red.800)] [--chkfg:white]"
            checked={selectedGender === 'male'}
            onChange={()=> onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checked:bg-[#7f1d1d] [--chkbg:theme(colors.red.800)] [--chkfg:white]"
            checked={selectedGender === 'female'}
            onChange={()=> onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
