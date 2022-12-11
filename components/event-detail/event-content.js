import classes from './event-content.module.css';

function EventContent({description}) {
  return (
    <section className={classes.content}>
      <p>{description}</p>
    </section>
  );
}

export default EventContent;
