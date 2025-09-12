import { boot } from "./boot/Boot"

export default function NotFound() {
  boot.active(false);
  boot.critical('Page not found');
  boot.error('The page you are looking for does not exist');
  boot.warn('Please return to the main page');

  return <></>;
}