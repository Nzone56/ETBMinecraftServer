import { useEffect, useState } from "react";

export const useItemSelector = <T>({ itemsArray }: { itemsArray: T[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ANIMATION STATES
  const [prevItem, setPrevItem] = useState<T>();
  const [animatingOut, setAnimatingOut] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const currentItem = itemsArray?.[currentIndex];
  console.log(prevItem, currentItem)
  const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? itemsArray?.length - 1 : prev - 1));

  const handleNext = () => setCurrentIndex((prev) => (prev === itemsArray?.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!currentItem) return;

    if (prevItem) {
      // Out animation start
      setAnimatingOut(true);
      setShowNew(false);

      setTimeout(() => {
        // Change char when animation ends
        setPrevItem(currentItem);
        setAnimatingOut(false);
        setShowNew(true);
      }, 1500); // spin-up-out duration
    } else {
      // Primer render
      setPrevItem(currentItem);
      setShowNew(true);
    }
    //eslint-disable-next-line
  }, [currentItem]);

  return { currentIndex, setCurrentIndex, handlePrevious, handleNext, prevItem, animatingOut, showNew };
};
