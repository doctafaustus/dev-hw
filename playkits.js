// Define playkits global data map for use on PDP 
window.playkits = [

  {
    title: 'The Looker Play Kit',
    reviews: { stars: 5, num: 20 },
    maxAge: getMaxAge({ months: 3 }),
    test: new Date(getMaxAge({ months: 3 })),
    suitableFor: '0 - 12 weeks',
    desc: 'We named this kit "The Looker" because in these first few months, your newborn is gradually becoming aware of the world around him. Right now, he uses his eyes as his primary way of gathering information. He is building up the connections between his brain and his eyes and is sensitive to light and sound. Includes a Mobile, Card Sets and Holders, Wooden Book, Rattle, Lullaby Lyrics, Mittens, and a little something for you!',
    images: [
      'K1.Lifestyle.jpg',
      'K1.2.Standing.Card.Holder.jpg',
      'K1.3.Simple.BW.Card.Set.jpg',
      'K1.4.Travel.Card.Holder.jpg',
      'K1.5.Complex.BW.Card.Set.jpg',
      'K1.6.BW.Mittens.jpg',
      'K1.7.Wooden.Book.jpg',
      'K1.1.Silicone.Rattle.jpg',
      'K1.9.Play.Guide.Looker.jp',
    ]
  },

  {
    title: 'The Charmer Play Kit',
    reviews: { stars: 4, num: 12 },
    maxAge: getMaxAge({ months: 4 }),
    test: new Date(getMaxAge({ months: 4 })),
    suitableFor: '3 - 4 months',
    desc: 'In months 3 and 4, you will start to see that little person inside emerge. Your baby now recognizes your face - cooing at you, smiling, and delighting everyone they meet. The Charmer Play Kit by Lovevery was designed for babies (3-4 months) by child development experts. Within the play kit you get some montessori classics, such as the wooden rattle, rolling bell, and montessori mirror. Combining a modern twist to your favorite montessori classics, The Charmer Play Kit by Lovevery will be the perfect addition to your baby\'s toy collection!',
    images: [
      'K2.1.Wooden.Rattle.jpg',
      'K2.2.Rolling.Bell.jpg',
      'K2.4.Mirror.Card.jpg',
      'K2.5.BW.Card.Set.jpg',
      'K2.6.Crinkle.Bag.jpg',
      'K2.14.Bead.Teether.jpg',
      'K2.15.Triangle-Teether-Rubber.jpg',
      'K2.11.Hand.to.Hand.Discs.jpg',
      'K2.12.Framed.Mirror.jpg',
      'K2.13.Play.Guide.Charmer.jpg',
      ]
  },

  {
    title: 'The Senser Play Kit',
    reviews: { stars: 3, num: 7 },
    maxAge: getMaxAge({ months: 6 }),
    test: new Date(getMaxAge({ months: 6 })),
    suitableFor: '5 - 6 months',
    desc: 'Until month 12, babies take in more information via their mouths than their fingers. We named this kit "The Senser" because your baby is tasting, mouthing, and feeling everything she can get her hands on right now — and working on getting herself closer to what looks and sounds exciting to her. We designed everything in this kit to help you both make the most of this stage.'
  },

  {
    title: 'The Inspector Play Kit',
    reviews: { stars: 5, num: 37 },
    maxAge: getMaxAge({ months: 8 }),
    test: new Date(getMaxAge({ months: 8 })),
    suitableFor: '7 - 8 months',
    desc: 'The Inspector Play Kit by Lovevery was designed by child development experts for babies 7-8 months old. During this age range, your baby is tuned in to so many little details and discovering so much about the real world. The Inspector Play Kit has toys to help develop many of your baby\'s skills. These include object permanence, fine motor skills, sensory, early sign language, early communication, early math skills, and oral motor development. Combining a modern twist to your favorite montessori classics, The Inspector Play Kit by Lovevery will be the perfect addition to your baby\'s toy collection!'
  },

  {
    title: 'The Explorer Play Kit',
    reviews: { stars: 2, num: 9 },
    maxAge: getMaxAge({ months: 10 }),
    test: new Date(getMaxAge({ months: 10 })),
    suitableFor: '9 - 10 months',
    desc: 'Engage your baby\'s senses as they define useful neural networks, experiment with gravity, and strengthen coordination. The Explorer Play Kit is built for explorers. The Clear Tube with its Stacking Rings teaches foundational lessons about gravity, volume, rolling and sliding, and more. You may have noticed your little one enjoys removing items from containers (sometimes by dumping!), and our Little Grip Canister Set is just right for that kind of learning, designed specifically for a baby\'s hands.'
  },

  {
    title: 'The Thinker Play Kit',
    reviews: { stars: 4, num: 29 },
    maxAge: getMaxAge({ months: 12 }),
    test: new Date(getMaxAge({ months: 12 })),
    suitableFor: '11 - 12 months',
    desc: 'The Thinker Play Kit is designed for what their brain is working on right now, including Opposite Balls that look the same but feel very different (one is light, the other quite heavy!), a Sliding Top Box that encourages problem solving skills, and wooden stacking stones that allow for balancing and sensory explanation in new ways, as well as other child-tested playthings and activities made for right now.'
  }
];


// Get the time of now - x months ago (max time baby is eligible for kit)
function getMaxAge({ months }) {
  const current = new Date();
  return current.setMonth(current.getMonth() - months);
}