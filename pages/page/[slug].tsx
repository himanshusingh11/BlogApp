
import React from 'react';
import Header from '../../components/Header';

function Pages() {
  return (
    <>
      <Header tag="hidden" title="About us" />
      <div className="prose prose-stone mx-auto my-12 lg:prose-lg">
        <p className="mb-3 font-light text-gray-500 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:uppercase first-line:tracking-widest dark:text-gray-400 dark:first-letter:text-gray-100">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis mollitia ducimus doloribus eius quisquam necessitatibus repellendus, tenetur incidunt impedit fugit iusto ipsam voluptates, rerum error doloremque cupiditate autem repudiandae?
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit omnis vero nam deleniti corporis sunt mollitia voluptatem. Earum nam nulla tempore nobis libero, reiciendis similique vel animi perferendis doloribus.
        </p>

        {/* Add some images */}
        <img
          src="https://source.unsplash.com/random/800x600"
          alt="Random Image1"
          className="my-6"
        />
        <p className="font-light text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at ad voluptas quos alias voluptatum consequatur nam ducimus. Ad tempore voluptatum odio cum. Odit facere maxime exercitationem nisi, harum optio.
        </p>

        <p className="font-light text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis odio, libero consequatur nostrum et. Impedit nihil quas repellendus quia, vitae deleniti eveniet unde, doloribus enim veritatis, ipsam sapiente quisquam?
        </p>

        <img
          src="https://source.unsplash.com/random/800x600"
          alt="Random Image 2"
          className="my-6"
        />
        <p className="font-light text-gray-500 dark:text-gray-400">
          Some more text related to this image.
        </p>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque, iste quae itaque, molestias veniam officia, suscipit sequi labore nisi ducimus! Nulla vitae nisi, iusto magni nihil omnis sint cupiditate.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus consequatur excepturi non delectus repellendus necessitatibus iste placeat consequuntur nostrum et alias harum commodi officia assumenda id, quis autem doloremque.
        </p>
      </div>
    </>
  );
}

export default Pages;

