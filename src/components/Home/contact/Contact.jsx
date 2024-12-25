// Contact

export default function Contact() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email: </label><br />
        <input type="email" id="email" pattern=".+@example\.com" required /><br />
        <label htmlFor="name">Name: </label><br />
        <input type="text" id="name" name="name" required /><br />

      </form>
      <div>
        Phone Number: 123-456-7890
      </div>
    </div>
  );
}