
import AccordionItem from '../accordionItem/AccordionItem';
import './accordion.scss';

const Accordion = ({data}) => {
  return (
    <div className='accordion'>
        {
            data.map((item, i ) => (
                <AccordionItem key={i} item={item}/>
            ))
        }
    </div>
  )
};

export default Accordion;
