import imageNotFound from './../../images/not-found.jpg';
import { NotFoundBox } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <NotFoundBox>
      <img src={imageNotFound} width="650" alt="ErrorImage" />
    </NotFoundBox>
  );
}