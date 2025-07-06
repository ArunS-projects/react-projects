import React from 'react';
import '../src/styles/CSSmodule.module.css';

function CSSmodule(props) {
    return (
        <div>
            <p className = {CSSmodule.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus sem, semper in velit a, ullamcorper dignissim purus. Vivamus auctor ullamcorper mattis. Sed mattis sodales vulputate. Nunc eu mi sit amet nulla vehicula tincidunt vitae auctor lectus. Aenean eu luctus enim. In hac habitasse platea dictumst. Nam fermentum ultrices porta. Aliquam imperdiet semper lectus. Nunc hendrerit pellentesque viverra. Vestibulum facilisis ex dui, et consectetur mauris convallis eget.</p>
            <p>Vestibulum non massa in massa molestie porta at vitae nisl. Sed faucibus sem libero, eu lacinia quam laoreet at. Nulla feugiat, urna tincidunt viverra vehicula, ex quam efficitur urna, non sodales mauris magna vel velit. Nam eget mauris non neque ultrices porttitor. Duis accumsan, tortor ut aliquam ornare, mauris velit congue nisi, sit amet maximus leo lectus quis mi. Cras semper tempus maximus. Quisque vel felis erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p className ='CSSmodule.para'>Nunc vehicula arcu nisi, ac hendrerit purus iaculis sit amet. Morbi cursus pharetra pharetra. In non ex fringilla, vulputate justo a, maximus ipsum. Proin vulputate facilisis elit et eleifend. Quisque nec urna pulvinar, malesuada dui sed, efficitur dolor. Nam pellentesque eget lorem at suscipit. Proin nec vulputate libero, quis fringilla mauris.</p>
            <p>Fusce nec scelerisque elit. Nulla convallis interdum leo vel malesuada. Aliquam rhoncus, ligula non commodo placerat, metus turpis suscipit massa, venenatis malesuada nisl diam ut purus. Nulla nec porttitor ligula, ut finibus lacus. Integer tempor lobortis feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius velit eget posuere hendrerit. Nullam vehicula, lacus in gravida feugiat, ante dui pulvinar sapien, sit amet dignissim metus ex vitae nibh. Maecenas hendrerit fringilla euismod. Vestibulum vehicula turpis sit amet erat cursus, in tempus mauris mollis. Nulla varius rutrum neque sed fermentum. Aliquam feugiat, lorem dignissim lacinia faucibus, purus tortor blandit orci, sed ullamcorper urna lacus non lacus. Nullam tortor libero, interdum non risus sit amet, luctus commodo dolor. Proin sed leo placerat, varius quam non, tristique diam.</p>
            {/* <p className = {styles.CSSmodule.para}>Fusce quis mi ligula. Nullam et euismod libero. Quisque eu arcu posuere leo hendrerit faucibus sit amet ut quam. Vestibulum in imperdiet mauris. Aliquam bibendum massa pellentesque, varius metus at, imperdiet nulla. Cras consectetur urna quis est hendrerit, eleifend rhoncus tellus tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p> */}
        </div>
    );
}

export default CSSmodule;