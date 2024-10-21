import img1 from '../../images/sweetness.jpg';
import img2 from '../../images/extinction.jpg';
import img3 from '../../images/local.jpeg';
import img4 from '../../images/thesecondwoman.jpeg';
import img5 from '../../images/trip.jpg';
import img6 from '../../images/web.jpg';
import img7 from '../../images/days.jpeg';
import img8 from '../../images/ending.png';
import img9 from '../../images/girls.jpeg';
import img10 from '../../images/ends.jpg';
import img11 from '../../images/babel.jpg';






const reviews = [
    { 
        id: '1', 
        title: 'Sweetness in the Skin', 
        author: 'Ishi Robinson', 
        content: `A winning debut novel about a Jamaican girl determined to bake her way out of her dysfunctional family and into the opportunity of a lifetime.

Pumkin Patterson is a thirteen-year-old girl living in a tiny two-room house in Kingston, Jamaica, with her grandmother (who wants to improve the family’s social standing), her Aunt Sophie (who dreams of a new life in Paris for her and Pumkin), and her mother Paulette (who’s rarely home).

When Sophie is offered the chance to move to France for work, she seizes the opportunity, and promises to send for her niece in one year’s time. All Pumkin has to do is pass her French entrance exam so she can attend school there. But when Pumkin’s grandmother dies, she’s left alone with her volatile mother, and as soon as her estranged father turns up—as lazy and conniving as ever—the household’s fortunes take a turn for the worse.

Pumkin must somehow find a way to raise the money for her French exam, so she can free herself from her household and reunite with her beloved aunt in France. In a moment of ingenuity, she turns her passion for baking into a true business. Making batches of sweet potato pudding, coconut drops and chocolate cakes, Pumkin develops a booming trade—but when her school and her mother find out what she’s up to, everything she’s worked so hard for may slip through her fingers. . . .`, 
        image: img1, 
        genre: 'Fiction',
        rating: 4 
    },
    { 
        id: '2', 
        title: 'Extinction', 
        author: 'Douglas Preston', 
        content: `Erebus Resort, occupying a magnificent, hundred-thousand-acre valley deep in the Colorado Rockies, offers guests the experience of viewing woolly mammoths, Irish Elk, and giant ground sloths in their native habitat, brought back from extinction through the magic of genetic manipulation. When a billionaire's son and his new wife are kidnapped and murdered in the Erebus back country by what is assumed to be a gang of eco-terrorists, Colorado Bureau of Investigation Agent Frances Cash partners with county sheriff James Colcord to track down the perpetrators.
As killings mount and the valley is evacuated, Cash and Colcord must confront an ancient, intelligent, and malevolent presence at Erebus, bent not on resurrection—but extinction.`, 
        image: img2,
        genre: 'Fiction',
        rating: 2
    },
    { 
        id: '3', 
        title: 'The Local', 
        author: 'Joey Hartstone', 
        content: 'Joey Hartstone', 
        image: img3,
        genre: 'Crime',
        rating: 5
    },
    { 
        id: '4', 
        title: 'The Second Woman', 
        author: 'Charlotte Philby', 
        content: 'Consectetur adipiscing elit.', 
        image: img4, 
        genre: 'Crime',
        rating: 4 
    },
    { 
        id: '5', 
        title: 'Earls Trip', 
        author: 'Jenny Holiday', 
        content: `A trip for three noblemen goes awry when they’re unexpectedly joined by two women.

Known for her contemporary romances, Holiday travels back to Regency England for this new series following two earls and a viscount—Archie, an outdoorsy hunter; bookish Simon; and Effie, a sensitive poet—who keep their friendship strong by vacationing together each year. Although they’ve made a rule that he’s not allowed to hunt during the trip, Archibald Fielding-Burton, the Earl of Harcourt, is still looking forward to the respite from his ailing mother. Then, as they’re in a carriage traveling toward Cumbria, they’re overtaken by a messenger carrying a note from an old family friend begging Archie to rescue his daughters from scandal and ruin—the younger one, Olive, is eloping, and the older one, Clementine, is trying to stop her. Suddenly, the Earls Trip has been invaded by women. Clementine Morgan is still the wild, nature-loving girl Archie remembers from years past, but his feelings toward her are different now. Clem has no intention of ever marrying, but her friendship with Archie is so natural that she feels comfortable asking him to teach her about carnal pleasure. Despite their enjoyment of each other, when the trip’s end draws near, Archie and Clem must try to figure out what their future could be. With most of the story taking place in the secluded castle where the group is staying, the focus is more on interpersonal relationships than historical detail. The examination of friendships, familial bonds, and, of course, romantic relationships drives the tale, and it works because the characters are so charming and complex. There’s plenty of humor sprinkled in, keeping the tone light and fun.
    
A breezy and amusing love story that showcases the importance of friendship.`, 
        image: img5, 
        genre: 'Romance',
        rating: 5
    },
    { 
        id: '6', 
        title: 'The Stranger I Wed', 
        author: 'Harper St.George', 
        content: `St. George’s Doves of New York series, a spinoff of the Gilded Age Heiresses, opens with another tale of an American heiress marrying into London nobility.

Cora Dove and her sisters were raised by their mother, an actress who received only a pitiable allowance from their father, the wealthy Charles Hathaway. His mother wanted to make things right on her deathbed, so she left generous dowries that her illegitimate granddaughters would receive when they married. Mr. Hathaway wants the Dove women nowhere near his family in New York, so Cora proposes they search for husbands in London. Once there, Cora and her sisters are introduced to potential suitors, including Leopold Brendon, Earl of Devonworth. In financial straits due to his brother’s recklessness, Devonworth—who would rather be focusing on his work in Parliament to improve the health of the working class—agrees to Cora’s plan for a marriage of convenience followed by a separation in a few years. As their feelings grow, however, they have to decide whether they want to try in earnest to be together and see if they’ll be able to stand by each other when secrets are revealed. St. George once again delivers a romance with an engrossing and detailed historical setting and characters with progressive ideals, particularly regarding the rights of women and the working class. Although the book gets off to a sluggish start as the groundwork for the series is laid, once Cora and Devonworth find their way to a respectful friendship, the story starts to build. The steamy payoff after their slow-burn relationship is immensely satisfying.
    
A delightful start to a new series, sure to please St. George’s existing fans and garner new ones.`, 
        image: img6, 
        genre: 'Romance',
        rating: 1
    },
    { 
        id: '7', 
        title: 'Babel', 
        author: 'R. F. Kuang', 
        content: `A complex and, in the beginning, slow read, Babel explores colonialism in a fantasy, alternate world, interrogating the use of translation by the British Empire as a tool weaponised for good and bad. Due to the story being set mostly at Oxford University, the novel has fallen under the umbrella of ‘dark academia’, a subculture made famous on social media platforms such as TikTok. 

It’s quite a weighty book, coming in at 545 pages, and requires deep focus and attention due to the intricacies of the story and characters. So, don’t expect to read this like a ‘normal’ story. Oh, and be prepared for some hefty footnotes too.
    
It’s important to note that the story deals with themes that may be triggering for readers, including, but not limited to: gender-based violence, child abuse, racial slurs, and violence. We advise doing some research before purchasing the book and to take care while reading it.`, 
        image:img11, 
        genre: 'Fantasy',
        rating: 3
    },
    { 
        id: '8', 
        title: 'It Ends With Us', 
        author: 'Colleen Hoover', 
        content: `Nothing tugs on the heartstrings more than a romance story. But with such complex and challenging themes of abuse, lost love, and heartbreak, this story encompasses much more than just romance. This is a love story about overcoming tragic circumstances and putting yourself first. 

Originally published in 2016, the novel dramatically rose in popularity during the pandemic when creators were taking to social media platforms, particularly TikTok, to discuss and critique books as well as other topics of interest. 
    
It’s easy to understand why Colleen Hoover’s standout novel has garnered so much interest and praise. It’s beautifully written and tackles difficult themes in a heartbreaking, but necessary, way. With this being said, it’s important to note that some elements of the story may be triggering for readers. So, we recommend doing some research before purchasing the book and, most importantly, take care of yourself when reading it.`, 
        image: img10, 
        genre: 'Fantasy',
        rating: 4 
    },
    { 
        id: '9', 
        title: 'The Girls I’ve Been', 
        author: 'Tess Sharpe', 
        content: `Soon to be a Netflix film, The Girls I’ve Been is a slick, gripping YA novel that expertly touches on a number of important themes — from LGBTQ+ representation to childhood experiences.

The story is largely told from the point of view of the book’s protagonist, a teen con-artist called Nora, or, at least, that’s what she’s called currently. It follows what happens when her and two other characters – her current girlfriend, and her ex boyfriend – are caught up in a bank heist, flitting back to share insights into her past before whizzing forward to the unfolding robbery. 
    
While she’s only 17, Nora’s past is dark and moving; the daughter of a criminal, Nora becomes a pawn and protégé for her mother from a young age. Ultimately, however, she manages to pull the ultimate con – escaping her mother and the abusive mark she eventually fell for instead of pulling her usual tricks.`, 
        image:img9, 
        genre: 'Thriller',
        rating: 5
    },
    { 
        id: '10', 
        title: 'I’m Thinking of Ending Things', 
        author: 'Iain Reed', 
        content: `We won’t give you a rundown of the narrative — it’s a short one, so we’ll just give you our thoughts.

Reed’s debut novel, I’m Thinking of Ending Things, is an accomplished, gripping, and thoughtful read if it’s the first book you’ve ever read. On the one hand, Reed’s somehow convinced scores of readers that this is a masterpiece. On the other, it’s perhaps telling that the majority of them appear to be children or early teens with a budding interest in “thinking” fiction.
    
We’re almost ashamed to say we read to the end hoping for a great a-ha! moment – a sort of demystifying climax that would make it clear the last 200-or-so pages were a surprisingly clever joke rather than self-indulgent writing. Instead, we’re left with an ending that was predicted from page two.
    
What’s more mystifying than the heavy-handed narrative is the fact that Charlie Kaufman (whose Being John Malkovic is a masterclass in oddball narrative) was compelled to adapt this for cinema – with an equally disappointing result despite the stellar performances & cinematography. You, er, can’t polish a…
    
Most frustratingly, the novel comes so close to the possibility of saying interesting things – but never makes the jump.`, 
        image: img8, 
        genre: 'Thriller',
        rating: 4 
    },
    { 
        id: '11', 
        title: 'Parisian Days', 
        author: 'Banine, translated by Anne Thompson-Ahmadova', 
        content: `Set in 1920’s Paris, this is a book about fresh starts and the joy of freedom. At the opening of ‘Parisian Days’, we meet a young passenger waiting for The Orient Express to pull into the Gare de Lyon. Author, Banine, is on the threshold of a new life – far, far away from her homeland of Azerbaijan.

This sparkling memoir follows her journey through the Roaring Twenties, as she gets swept along by the forces of history. She quickly realises that with freedom, comes complications. As her family’s money runs out, she is forced to become a fashion model to survive, entering her into a whole new subculture – but does she have what it takes to survive?`, 
        image: img7, 
        genre: 'Biography',
        rating: 3
    }
];

export default reviews;
