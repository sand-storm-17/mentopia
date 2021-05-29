import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>Here our members have written about mental health.</h2>
      <p>Be sure to read these.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              author=""
              body="You don't have to have all the answers or make them happy.
              Here’s what you can do:
              
              1. Let them lead the conversation.
              2. Listen. Really listen.
              3. Let them know you’re there for them and want to help.
              4. Offer to connect them with any additional support they might need."
              title="How To Help Someone Who's Hurting #Suicide"
            />
            <CardItem
                author=""
                body='We all have days when we feel down, but those feelings usually pass without having too much impact on our lives. But if they last beyond a couple of weeks or you feel as though things are getting worse, it could be a sign that you’re experiencing depression.

                Symptoms of depression vary from person to person, but often include feeling low, numb, worthless or without hope. You may find you sleep too much or too little, don’t eat properly, and withdraw from social contact with friends and family. Some people will even have thoughts about self-harming or suicide.
                
                There are lots of reasons why someone might feel depressed, but sometimes there isn’t any obvious reason. It can be caused by a difficult life event – losing a job, relationship difficulties, or physical health problems like illness and disability, or low self-esteem.'
                title="What causes depression?"
            />
             <CardItem
                author=""
                body='If you have been diagnosed with a personality disorder it doesn’t mean that you’re fundamentally different from anyone else, but at times you might need extra support.

                The word ‘personality’ refers to the pattern of thoughts, feelings and behaviour that makes each of us the individuals that we are. These affect the way we think, feel and behave towards others and ourselves.
                
                We don’t always think, feel and behave in exactly the same way – it depends on the situation we are in, the people with us and many other things. But we mostly tend to behave in fairly predictable ways.
                
                Personality disorders are a type of mental health problem where your attitudes, beliefs and behaviours cause you longstanding problems in your life. Your experience of personality disorder is unique to you. However, you may often experience difficulties in how you think about yourself and others. You may find it difficult to change these unwanted patterns'
                title="What is a personality disorder?"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              author=""
              body='Different people will find that different treatments help to manage their mental health – whether this is medication, or alternatives such as talking therapies, exercise or a mixture.

              While antidepressants can be effective for some, they are not the solution for everyone and are not generally recommended as a first-line treatment for mild to moderate depression. Anyone taking antidepressants should be made aware of the possible pros and cons for them, and they should have their treatment reviewed regularly.
              
              Talking therapies such as cognitive behavioural therapy (CBT) and counselling are becoming more widely available as part of the Improving Access to Psychological Therapies programme. Giving people a choice of treatments is key, whether that’s drugs, talking therapies, or alternatives such as arts therapy or exercise'
              title="Are drugs or therapy better for mental health conditions?"
            />
            <CardItem
                author=""
                body='1. Value yourself
                2. Take care of your body
                3. Surround yourself with good people
                4. Give yourself:
                Volunteer your time and energy to help someone else.
                5. Learn how to deal with stress
                6. Quiet your mind
                7. Set realistic goals
                8. Break up the monotony
                9. Avoid alcohol and other drugs
                10. Get help when you need it'
                title="Ten Things You Can Do for Your Mental Health"
            />
            <CardItem
               author=""
               body='One of the most important things to do if you’re feeling down is to open up. Most people feel more comfortable confiding in a close friend or family member in the first instance. Often simply talking about it helps. If the problem continues and begins to interfere with everyday life, you can speak to your GP, who can talk you through the support that’s available.'
               title="I feel quite low sometimes. Should I see a therapist?"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
