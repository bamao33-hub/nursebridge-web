import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nursebridgeconsulting.com'

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/preceptorship`, lastModified: new Date() },
    { url: `${baseUrl}/career-paths`, lastModified: new Date() },
    { url: `${baseUrl}/ancc-certification`, lastModified: new Date() },

    { url: `${baseUrl}/practice-lab`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/liaison`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/training`, lastModified: new Date() },

    { url: `${baseUrl}/practice-lab/liaison/scenario-1`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/liaison/scenario-2`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/liaison/scenario-3`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/liaison/scenario-4`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/liaison/scenario-5`, lastModified: new Date() },

    { url: `${baseUrl}/practice-lab/training/scenario-1`, lastModified: new Date() },
    { url: `${baseUrl}/practice-lab/training/scenario-2`, lastModified: new Date() },
  ]
}
