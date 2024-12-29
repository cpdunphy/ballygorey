import Chip from '@/components/chip'
import Image from 'next/image'
import technologies from '@/data/technologies.json'

export default function TechChips({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill_key) => {
        const skill = technologies.find((tech) => tech.id === skill_key)
        if (!skill) return null
        return (
          <Chip key={skill_key} color={skill.color}>
            <div className="flex items-center space-x-4">
              <div className="relative mr-2 flex h-3 w-3 items-center">
                <Image
                  src={skill.imagePath}
                  alt={`${skill.name} Logo`}
                  className="object-contain"
                  fill
                  sizes="12px"
                />
              </div>
              {skill.name}
            </div>
          </Chip>
        )
      })}
    </div>
  )
}
