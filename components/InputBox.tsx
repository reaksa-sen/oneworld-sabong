
interface Input {
  props: any;
  error?: string;
  name: string;
  type: string;
  placeholder: string;
}


interface TextArea {
  props: any;
  error?: string;
  name: string;
  placeholder: string;
  rows: number;
}

const HelperText: React.FC<{ error?: string }> = ({ error }) => (
  <small className="text-red-500">{error}</small>
);

export const InputBox: React.FC<Input> = ({ props, error, name, type, placeholder }) => (
  <div>
    <input
      {...props}
      className="w-full border px-4 py-3 drop-shadow "
      name={name}
      type={type}
      placeholder={placeholder}
    />
    <HelperText error={error} />
  </div>
);


export const TextArea: React.FC<TextArea> = ({ props, error, name, placeholder, rows }) => (
  <div>
    <textarea
      {...props}
      className="w-full border px-4 py-3 drop-shadow "
      id={name}
      name={name}
      placeholder={placeholder}
      rows={rows}
    />
    <HelperText error={error} />
  </div>
);