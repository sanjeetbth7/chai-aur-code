import Button from "./Button";

export default function Header({ setColor }) {
  return (
    <>
        <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2 bg-orange-200">
          <div className="hidden lg:block">
            <Button name="black" setColor={setColor} />
            <Button name="blueviolet" setColor={setColor} />
            <Button name="antiquewhite" setColor={setColor} />
            <Button name="yellow" setColor={setColor} />
          </div>
        </div>
    </>
  );
}