import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from 'react-icons/rx';

export const serviceData =  [
  {
    icon: <RxCrop/>,
    title: 'Branding',
    description: 'Lorem ipsum.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum.',
  },

  {
    icon: <RxDesktop/>,
    title: 'Developement',
    description: 'Lorem ipsum ',
  },

  {
    icon: <RxReader/>,
    title: 'Copywriting',
    description: 'Lorem ipsum ',
  },
  {
    icon: <RxRocket/>,
    title: 'Seo',
    description: 'Lorem ipsum ',
  },
];

const Services = () => {
  return <div>Services</div>;
};

export default Services;
