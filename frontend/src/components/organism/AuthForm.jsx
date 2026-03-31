import Button from "../atoms/Button";
import FormField from "../molecules/FormField";

export default function AuthForm(props) {
  const { fields, onSubmit, buttonText } = props;
  
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}

      <Button type="submit" full>
        {buttonText}
      </Button>
    </form>
  );
}