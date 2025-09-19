# Welcome!
*to my portfolio website*

Built with React, Vite and pure Css. Nothing too fancy...

---


# Usage

**Adding a new "My Journey" card** can be done by making a new entry into the `projects` array in the `src/projects.ts` file. Most fields need to be defined, a few are optional. Depending on the link type - if it is an article on the site - you may need to create an appropriate file in the `public` folder.

**Adding a new article**: just add the html file and its assets in the `public` folder for short stories about projects which aren't 'just code' and cannot be simply linked to a github. Then, for *react-router* to recognise this resource/load the ``LoadPage`` (which then loads the article), you must make an entry in the ``App.tsx`` like so:

```typescript
 return (
    <>
      <Boot isBooted={isBooted} isBootedSetter={setIsBooted} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home active={isBooted} />} />

          <Route path="projects" >
            // this is the new entry
            <Route path="<any-name-path>" element={<LoadPage path="<actual-public-folder-resource-path>" />} />
            
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
```

Be aware that the link form the journey card to the article has to match the `<any-name-path>` you gave the Route in the jsx code, not the actual path.

**Editing texts** the homepage is split into a few sections. Most of the text is saved in variables (in jsx format) in `src/text.tsx` and can be changed there. Otherwise, please look up the corresponding `src/*.tsx` file, most likely saved in a folder with the same name as the section, and edit the text there. 

> [!WARNING]
> __Project == My Journey__
> Due to a previous version of the website, the "My Journey" section of the website is referenced as the "project" section in the code.
