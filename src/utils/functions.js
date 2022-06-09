import { ROUTES } from "./constants";

export const handleVisibleMyNftsPage = (visible) => {
  ROUTES.forEach(element => {
    if (element.id === 3) {
      element.visible = visible;
    }
  });
};