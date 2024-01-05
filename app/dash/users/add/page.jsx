import styles from "@/app/ui/dash/users/addUser/addUser.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Company Name" name="company_name" required pattern="[a-z]*"/>
        <input type="email" placeholder="Contact email" name="contact_email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
        <input type="phone" placeholder="Contact number" name="contact_number" required/>
        <input type="text" placeholder="Billing Address" name="billing_address" required/>
        <input type="text" placeholder="Mailing address" name="mailing_address"/>
        <input type="text" placeholder="Contact Name" name="contact_name" required />
        <select name="subscription_type" id="subscription_type" required>
          <option value={"std"}>
            Subscription Type
          </option>
          <option value={"std"}>Standard</option>
          <option value={"prem"}>Premium</option>
          <option value={"trial"}>Trial</option>
        </select>
        <input type="text" placeholder="Assitant ID" name="assitant_id"/>
        <select name="type" id="type" required>
          <option value={"health"}>
            Type
          </option>
          <option value={"health"}>Health</option>
          <option value={"bike"}>Bike</option>
          <option value={"motor"}>Motor</option>
          <option value={"term"}>Term</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;